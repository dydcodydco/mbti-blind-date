import { getCsrfToken } from 'next-auth/react';

export const updateSession = async (updatedUser: any) => {
  try {
    const csrfToken = await getCsrfToken();
    if (!csrfToken) {
      throw new Error('Failed to get CSRF token');
    }
    const response = await fetch('/api/auth/session?update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify({ user: updatedUser }),
    });

    if (!response.ok) {
      throw new Error('Failed to update session');
    }

    // Reload the session
    const session = await response.json();
    console.log('Session updated', session);
  } catch (error) {
    console.error('Error updating session', error);
  }
};