// components/NewsletterForm.tsx (Client Component)
'use client';

import { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    try {
      // Replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Subscribed:', email);
      setStatus('success');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold mb-3 text-gray-300">Subscribe to our newsletter</h4>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-400 border border-gray-700 disabled:opacity-50"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-r-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[100px]"
        >
          {status === 'loading' ? '...' : status === 'success' ? '✓' : status === 'error' ? '✗' : 'Subscribe'}
        </button>
      </form>
      {status === 'success' && (
        <p className="text-green-400 text-sm mt-2">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
      )}
    </div>
  );
};

export default NewsletterForm;