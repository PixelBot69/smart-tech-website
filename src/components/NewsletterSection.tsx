
'use client';
import React, { useState } from 'react';
import { Send, Mail, ArrowRight, CheckCircle } from 'lucide-react';

const ContactFormSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="contact-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="rgb(113 113 122)" />
              <circle cx="15" cy="15" r="0.5" fill="rgb(113 113 122)" opacity="0.5" />
              <circle cx="45" cy="45" r="0.5" fill="rgb(113 113 122)" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-zinc-600 text-sm font-medium tracking-wide uppercase">Get In Touch</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 mb-6 leading-tight">
              Have <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 font-thin">Questions?</span>
            </h2>
            
            <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
            
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
              Send us your email and we'll reach out to discuss your project needs and provide custom solutions tailored to your requirements.
            </p>
          </div>

          {/* Contact Form Card */}
          <div className="relative bg-white rounded-3xl border border-zinc-200 shadow-xl overflow-hidden">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-3xl"></div>
            
            <div className="relative z-10 p-12">
              
              {/* Success State */}
              {isSubmitted && (
                <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-zinc-900 mb-2">Thank You!</h3>
                    <p className="text-zinc-600 font-light">
                      Your inquiry has been received. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Form State */}
              {!isSubmitted && (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Form Header */}
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mx-auto">
                      <Mail className="w-6 h-6 text-zinc-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-zinc-900 mb-2">Start Your Project</h3>
                      <p className="text-zinc-600 font-light">
                        Enter your email to begin the conversation
                      </p>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <div className="relative flex">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                        <Mail className="w-5 h-5 text-zinc-400" />
                      </div>
                      
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-1 pl-12 pr-4 py-4 rounded-2xl border border-zinc-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 text-zinc-900 placeholder-zinc-400 bg-white"
                        required
                      />
                      
                      <button
                        type="submit"
                        disabled={isLoading || !email}
                        className="ml-3 px-8 py-4 bg-zinc-900 text-white rounded-2xl hover:bg-zinc-800 disabled:bg-zinc-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2 group font-medium"
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <span>Send</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Alternative Layout for Mobile */}
                  <div className="sm:hidden space-y-4">
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                        <Mail className="w-5 h-5 text-zinc-400" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-zinc-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 text-zinc-900 placeholder-zinc-400"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading || !email}
                      className="w-full py-4 bg-zinc-900 text-white rounded-2xl hover:bg-zinc-800 disabled:bg-zinc-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group font-medium"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Query</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Form Footer */}
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-4 text-sm text-zinc-500">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>24 Hour Response</span>
                      </div>
                      <div className="w-1 h-1 bg-zinc-300 rounded-full"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Free Consultation</span>
                      </div>
                    </div>
                    
                    <p className="text-zinc-500 text-sm font-light">
                      We'll get back to you within 24 hours to discuss your requirements and provide a custom solution.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="text-center p-6 bg-white rounded-2xl border border-zinc-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-medium text-zinc-900 mb-2">Quick Response</h3>
              <p className="text-sm text-zinc-600 font-light">Get answers to your questions within 24 hours</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl border border-zinc-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-zinc-900 mb-2">Custom Solutions</h3>
              <p className="text-sm text-zinc-600 font-light">Tailored automation systems for your needs</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl border border-zinc-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-medium text-zinc-900 mb-2">Expert Consultation</h3>
              <p className="text-sm text-zinc-600 font-light">Professional advice from our specialists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;