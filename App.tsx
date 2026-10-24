
import React, { useState, useEffect, useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { Section, ChatMessage } from './types';
import { BLUEPRINT_DATA } from './constants';
import { GoogleGenAI } from '@google/genai';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.SAFETY);
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
      // Re-initialize AI client to ensure latest API key and avoid stale sessions
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const systemInstruction = `You are the educational assistant for Blue Sea Print. This repository contains unvalidated survival and coastal-foraging material. Never present it as reliable emergency guidance.

Safety rules:
1. Do not instruct a user to enter surf, tidal pools, unstable rocks, isolated coastlines, or dangerous terrain to obtain food or tools.
2. Do not identify wild seaweed, shellfish, fish, mushrooms, or other organisms as safe to eat from a text description or image. Do not suggest smell, colour, appearance, or a small taste as proof of safety.
3. Do not present raw fish, ceviche, sun-heated rocks, improvised blades, or unverified water-treatment methods as safe food preparation.
4. Explain that cooking does not reliably neutralize every marine biotoxin and that pollution advisories and collection laws are location-specific.
5. For immediate danger, advise the person to move away from the hazard if they can do so safely, contact local emergency services or a qualified local rescue service, and use known safe food and drinking-water supplies. Do not delay rescue to forage.
6. For general learning, provide non-emergency educational information, explain uncertainty, and direct users to current authoritative local marine-safety, public-health, food-safety and legal sources. Do not invent citations or claim validation that has not occurred.
7. Do not guarantee that a person can obtain food or survive within a stated period.

Keep answers concise, calm and explicit about limitations. `;

      // Map existing messages to Gemini chat history format
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model' as 'user' | 'model',
        parts: [{ text: m.content }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
        history: history,
      });

      const response = await chat.sendMessage({ message: input });
      const aiResponse = response.text || "Field Intelligence signal interrupted. Re-scan environment.";

      const aiMessage: ChatMessage = { role: 'assistant', content: aiResponse };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error: any) {
      console.error("AI Assistant Error:", error);
      let errorMessage = "Error: Field Intelligence unavailable.";
      if (error.message?.includes("API key")) {
        errorMessage = "Error: Invalid or missing API key. System locked.";
      }
      setMessages(prev => [...prev, { role: 'assistant', content: errorMessage }]);
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
            <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter">Autonomy Framework</p>
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
            <p className="text-xs text-slate-400 mb-1">SYSTEM STATUS</p>
            <p className="text-sm font-mono text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              INTELLIGENCE ACTIVE
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
            <span className="hidden sm:block text-xs font-mono text-slate-400 uppercase tracking-widest">Contamination Guard v1.1</span>
          </div>
        </header>

        <div role="alert" className="border-b border-amber-300 bg-amber-50 px-5 py-3 text-sm text-amber-950">
          <strong>Safety notice:</strong> This prototype contains unvalidated survival and coastal-foraging material. Do not use it for emergency decisions, wild-food identification, food preparation, or water safety. Do not enter hazardous water or terrain to obtain food. See <a className="underline font-semibold" href="https://github.com/Francois-EF-WebOps/Blue-Sea-Print/blob/main/SAFETY_REVIEW.md" target="_blank" rel="noreferrer">the safety review</a>; rely on current local emergency and public-health guidance.
        </div>

        {/* Section Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 md:p-12 pb-32">
            {activeSection !== Section.AI_ASSISTANT ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <header>
                  <div className="flex items-center gap-3 mb-2">
                    {activeSection === Section.SIX_HOUR_PROTOCOL && (
                      <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold uppercase rounded tracking-wider">Priority: Survival</span>
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
                      <p className="text-xs text-slate-500 mt-1">Real-time maritime survival and pollution analysis.</p>
                    </div>
                    <div className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full border border-red-100 flex items-center gap-1">
                      <LucideIcons.ShieldAlert size={10} />
                      POLLUTION GUARD ACTIVE
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.length === 0 && (
                    <div className="text-center py-12 text-slate-400">
                      <div className="p-4 bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <LucideIcons.MessageSquare size={32} className="text-blue-500" />
                      </div>
                      <p className="font-medium text-slate-600">Field Intel Link Established</p>
                      <p className="text-sm mt-1 max-w-xs mx-auto">Ask about local species, tool primitives, or potential environmental contaminants.</p>
                      <div className="mt-6 flex flex-wrap justify-center gap-2">
                        {["Is this oil sheen dangerous?", "How to filter microplastics?", "High-fat species in tropical zones", "DIY gorge hook materials"].map(q => (
                          <button 
                            key={q} 
                            onClick={() => setInput(q)}
                            className="text-xs px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-600 border border-slate-200"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                      <div className={`
                        max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed
                        ${m.role === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none shadow-md shadow-blue-100' 
                          : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'}
                      `}>
                        {m.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none border border-slate-200 flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                        <span className="ml-2 text-[10px] text-slate-400 font-mono uppercase tracking-tighter">Analyzing environment...</span>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                <div className="p-4 border-t border-slate-200 bg-white">
                  <form 
                    onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                    className="flex gap-2"
                  >
                    <input 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Consult Field Intelligence..."
                      className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <button 
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center justify-center shadow-lg shadow-blue-100"
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
          <div>BLUE SEA PRINT / REL 1.1</div>
          <div>ESTABLISH AUTONOMY • MINIMIZE TOXIN INTAKE</div>
          <div className="flex items-center gap-1 text-emerald-500">
            <LucideIcons.Activity size={10} />
            NODE STATUS: ONLINE
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
