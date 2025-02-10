import React from 'react';
import { Send } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Campus?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Join hundreds of institutions already optimizing their lecture spaces
          </p>

          <form className="mt-10 flex flex-col gap-4">
            <div className="flex gap-4 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg px-4 py-3 bg-white/10 border border-blue-100/20 text-white placeholder-blue-100/70 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <select className="rounded-lg px-4 py-3 bg-white/10 border border-blue-100/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                <option value="" className="bg-blue-950">Select Campus Size</option>
                <option value="small" className="bg-blue-950">Small University</option>
                <option value="medium" className="bg-blue-950">Medium University</option>
                <option value="large" className="bg-blue-950">Large University</option>
              </select>
            </div>
            
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 text-sm font-semibold text-blue-950 shadow-sm hover:from-amber-500 hover:to-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all duration-200">
              Request Custom Demo <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}