
import React, { useState, useEffect, useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { Section, ChatMessage } from './types';
import { BLUEPRINT_DATA } from './constants';
import { GoogleGenAI } from '@google/genai';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.SIX_HOUR_PROTOCOL);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `You are a survival expert specializing in the "Blue Sea Print" framework. 
      The framework covers: maritime resilience, subsistence fishing, tool primitives, nutrition, and preservation.
      CRITICAL FOCUS: You must prioritize pollution awareness, heavy metal bioaccumulation, and environmental contamination (microplastics, oil, runoff) in all advice.
      The current context is the 6-Hour Survival Protocol (from zero to meal).
      Answer the user's specific question concisely and practically. Avoid fluff.
      User question: ${input}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      const aiMessage: ChatMessage = { role: 'assistant', content: response.text || "I'm sorry, I couldn't process that." };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Error: Could not connect to the field intelligence unit." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const IconComponent = ({ name, size = 20, className = "" }: { name: string, size?: number, className?: string }) => {
    const Icon = (LucideIcons as any)[name];
    return Icon ? <Icon size={size} className={className} /> : null;
  };

  const data = BLUEPRINT_DATA[activeSection];

  return (
    <div className="flex h-screen overflow-hidden text-slate-900">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 text-slate-100 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:flex md:flex-col
      `}>
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <LucideIcons.Waves size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Blue Sea Print</h1>
            <p className="text-xs text-slate-400 font-medium">AUTONOMY FRAMEWORK</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {Object.entries(BLUEPRINT_DATA).map(([key, value]) => (
            <button
              key={key}
              onClick={() => {
                setActiveSection(key as Section);
                setIsSidebarOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium
                ${activeSection === key 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}
              `}
            >
              <IconComponent name={value.icon} size={18} />
              {value.title}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <p className="text-xs text-slate-400 mb-1">CURRENT STATUS</p>
            <p className="text-sm font-mono text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEMS DEPLOYED
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full bg-slate-50 relative overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              onClick={() => setIsSidebarOpen(true)}
            >
              <LucideIcons.Menu size={20} />
            </button>
            <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
              <IconComponent name={data.icon} size={16} />
              <span>{data.title}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-xs font-mono text-slate-400 uppercase tracking-widest">Contamination Guard Active</span>
          </div>
        </header>

        {/* Section Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 md:p-12 pb-32">
            {activeSection !== Section.AI_ASSISTANT ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <header>
                  <div className="flex items-center gap-3 mb-2">
                    {activeSection === Section.SIX_HOUR_PROTOCOL && (
                      <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold uppercase rounded tracking-wider">High Priority</span>
                    )}
                    <h2 className="text-3xl font-bold text-slate-900">{data.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">{data.description}</p>
                </header>

                {/* Timeline Component for 6-Hour Protocol */}
                {data.timeline && (
                  <div className="space-y-6 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
                    {data.timeline.map((item, idx) => (
                      <div key={idx} className="relative pl-12">
                        <div className={`absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center border-4 border-slate-50 shadow-sm z-10 ${idx === 0 ? 'bg-blue-600 text-white' : 'bg-white text-slate-400 border-slate-200'}`}>
                          <span className="text-xs font-bold">{idx + 1}</span>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-200 transition-colors">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-bold text-slate-900">{item.label}</h4>
                            <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">{item.duration}</span>
                          </div>
                          <ul className="space-y-2">
                            {item.tasks.map((task, tidx) => (
                              <li key={tidx} className="flex gap-3 text-sm text-slate-600">
                                <LucideIcons.CircleCheck size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="grid gap-6">
                  {Object.entries(data.details || {}).map(([key, value]) => (
                    <div key={key} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                      <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">{key}</h3>
                      <div className="text-slate-700 leading-relaxed whitespace-pre-line text-sm">
                        {Array.isArray(value) ? (
                          <ul className="list-disc pl-5 space-y-1">
                            {value.map((v, i) => <li key={i}>{v}</li>)}
                          </ul>
                        ) : value}
                      </div>
                    </div>
                  ))}
                </div>

                {activeSection === Section.PATHWAY && (
                   <div className="bg-slate-900 text-white p-8 rounded-2xl">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <LucideIcons.CheckSquare className="text-blue-400" />
                        Implementation Checklist
                      </h3>
                      <ul className="space-y-3 text-slate-300">
                        <li className="flex gap-3 items-start"><span className="text-blue-400 font-bold">01</span> Identify high-tide and low-tide lines at your location.</li>
                        <li className="flex gap-3 items-start"><span className="text-blue-400 font-bold">02</span> Screening: Identify absence of oil sheens or sewage odor.</li>
                        <li className="flex gap-3 items-start"><span className="text-blue-400 font-bold">03</span> Forage baseline protein from verified 'clean' rocky zones.</li>
                        <li className="flex gap-3 items-start"><span className="text-blue-400 font-bold">04</span> Locate a source of clean, unpolluted seawater for salt production.</li>
                      </ul>
                   </div>
                )}
              </div>
            ) : (
              <div className="h-full flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden min-h-[600px]">
                <div className="p-4 border-b border-slate-200 bg-slate-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="font-bold flex items-center gap-2">
                        <LucideIcons.Cpu size={18} className="text-blue-600" />
                        Field Intelligence
                      </h2>
                      <p className="text-xs text-slate-500 mt-1">Ground-truthed AI for specific sea-based survival and pollution queries.</p>
                    </div>
                    <div className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full border border-red-100 flex items-center gap-1">
                      <LucideIcons.ShieldAlert size={10} />
                      POLLUTION GUARD ON
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.length === 0 && (
                    <div className="text-center py-12 text-slate-400">
                      <LucideIcons.MessageSquare size={48} className="mx-auto mb-4 opacity-20" />
                      <p>Ask about local species, material substitutes, or pollution screening.</p>
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {["Is this oil sheen dangerous?", "How to filter microplastics?", "Identify heavy metal in fish", "Best wood for smoking fish?"].map(q => (
                          <button 
                            key={q} 
                            onClick={() => setInput(q)}
                            className="text-xs px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-600"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`
                        max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed
                        ${m.role === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-slate-100 text-slate-800 rounded-tl-none'}
                      `}>
                        {m.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none flex gap-1">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                <div className="p-4 border-t border-slate-200 bg-slate-50">
                  <form 
                    onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                    className="flex gap-2"
                  >
                    <input 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your question..."
                      className="flex-1 bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                    >
                      <LucideIcons.Send size={18} />
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer info (Desktop only) */}
        <footer className="hidden md:flex h-12 border-t border-slate-200 bg-white items-center justify-between px-6 text-[10px] text-slate-400 font-mono uppercase tracking-widest">
          <div>BLUE SEA PRINT / VERSION 1.1</div>
          <div>POLLUTION-AWARE AUTONOMY • ENSURE CONTINUITY</div>
          <div>SCREENING ACTIVE</div>
        </footer>
      </main>
    </div>
  );
};

export default App;
