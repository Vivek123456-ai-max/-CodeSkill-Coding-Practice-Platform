import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase, userProfileService } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isGuest: boolean;
  signInWithGuest: () => void;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isGuest, setIsGuest] = useState<boolean>(() => {
    return localStorage.getItem('ai_dsa_guest_mode') === 'true';
  });

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        await userProfileService.syncUserWithSupabase(session.user);
      }
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        setIsGuest(false);
        localStorage.removeItem('ai_dsa_guest_mode');
        await userProfileService.syncUserWithSupabase(session.user);
      } else {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('codetutor_status_synced', { detail: { userId: null } }));
        }
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGuest = () => {
    setIsGuest(true);
    localStorage.setItem('ai_dsa_guest_mode', 'true');
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('codetutor_status_synced', { detail: { userId: null } }));
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch {
      // Ignore
    }
    setUser(null);
    setSession(null);
    setIsGuest(false);
    localStorage.removeItem('ai_dsa_guest_mode');
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('codetutor_status_synced', { detail: { userId: null } }));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        isGuest,
        signInWithGuest,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
