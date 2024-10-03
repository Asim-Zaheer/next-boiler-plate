// pages/login.js
import React from 'react';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome to Materio! 👋</h1>
          <p className="text-gray-500 mt-2">
            Please sign in to your account and start the adventure
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-left text-gray-600">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue="admin@materio.com"
              required
              className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-left text-gray-600">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              defaultValue="******"
              required
              className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Log In
          </button>
        </form>
        <div className="text-center">
          <p className="text-gray-500">
            New on our platform?{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Create an account
            </a>
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-500">or</p>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="p-2 text-white bg-blue-400 rounded-full hover:bg-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334v-.424A6.676 6.676 0 0016 3.542c-.616.275-1.28.46-1.975.54a3.283 3.283 0 001.443-1.816 6.574 6.574 0 01-2.07.793A3.267 3.267 0 007.875 6.03a9.325 9.325 0 01-6.769-3.431 3.258 3.258 0 001.01 4.362 3.273 3.273 0 01-1.48-.41v.041a3.283 3.283 0 002.633 3.215 3.29 3.29 0 01-1.473.056 3.283 3.283 0 003.067 2.28A6.571 6.571 0 010 13.292 9.291 9.291 0 005.026 15z" />
            </svg>
          </button>
          <button className="p-2 text-white bg-gray-800 rounded-full hover:bg-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
              <path d="M8 .198a8 8 0 10.002 15.604A8 8 0 008 .198zm3.093 12.661c-.259.287-.688.62-1.024.66-.273.032-.42-.147-.655-.287-.237-.14-.349-.24-.61-.36-.264-.123-.612-.423-.877-.57-.264-.146-.486-.24-.695-.54-.21-.299-.148-.448.02-.647.17-.199.412-.52.635-.706.226-.186.454-.397.688-.612.236-.215.32-.342.496-.57.177-.23.326-.572.47-.841.145-.268.273-.628.491-.83.218-.201.519-.347.821-.272.265.064.567.25.772.489.205.24.354.558.354.907 0 .347-.2.707-.314.993-.115.285-.253.558-.375.823-.12.266-.232.526-.355.792-.122.266-.227.53-.339.793zm-6.26 1.82c-.62-.089-1.25-.358-1.66-.875-.41-.516-.56-1.166-.573-1.874-.014-.707-.026-1.418-.025-2.128 0-.711.01-1.425.015-2.13-.002-.707.07-1.424.486-2.056.416-.633 1.09-1.02 1.83-1.202.62-.141 1.273-.169 1.905-.02.632.149 1.197.493 1.52 1.063.323.57.4 1.245.372 1.892-.028.648-.01 1.296-.025 1.943.013.648-.02 1.294-.372 1.893-.352.598-.887.913-1.52 1.063-.632.149-1.285.121-1.905-.02z" />
            </svg>
          </button>
          <button className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
              <path d="M8.277 0C3.754 0 0 3.754 0 8.277c0 4.003 3.148 7.304 7.094 7.697v-5.44H4.845V8.277h2.25V6.46c0-2.255 1.356-3.502 3.422-3.502.97 0 1.804.072 2.045.104v2.37h-1.403c-1.101 0-1.313.522-1.313 1.289v1.677h2.625l-.341 2.258h-2.284v5.443c3.945-.395 7.09-3.697 7.09-7.698C16.555 3.754 12.8 0 8.277 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="fixed bottom-5 right-5">
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
}
