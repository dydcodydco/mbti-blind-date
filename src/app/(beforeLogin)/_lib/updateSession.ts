'use client';

import { getCsrfToken } from 'next-auth/react';

export const updateSession = async (updatedUser: any) => {
  try {
    const csrfToken = await getCsrfToken();
    if (!csrfToken) {
      throw new Error('Failed to get CSRF token');
    }
    console.log(csrfToken, '---------------------------------updateSession csrfToken');
    const response = await fetch('/api/auth/session?update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify({ user: updatedUser }),
    });

    console.log(response, '---------------------------------updateSession response');
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