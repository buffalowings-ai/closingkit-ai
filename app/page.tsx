import Link from "next/link";
import { CheckCircle2, Target, MessageSquare, Users, Megaphone, BarChart3, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200/60 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                ClosingKit.ai
              </span>
            </div>
            <div className="flex items-center gap-8">
              <Link
                href="#features"
                className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
              >
                Features
              </Link>
              <Link
                href="#waitlist"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 font-medium"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-8">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">Built for technical founders</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 leading-tight mb-8 font-[family-name:var(--font-playfair)]">
              Stop guessing
              <br />
              at <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">sales</span>.
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              The guided system that helps technical founders figure out <span className="font-semibold text-slate-900">who to sell to</span>,
              <span className="font-semibold text-slate-900"> what to say</span>, and <span className="font-semibold text-slate-900">where to find them</span>—without burning through runway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#waitlist"
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 text-lg font-semibold hover:scale-105"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-slate-300 text-slate-900 rounded-2xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 text-lg font-semibold"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-playfair)]">
              You built the product.
              <br />
              Now you need customers.
            </h2>
            <p className="text-xl text-slate-600 font-light">
              But as a technical founder, you're flying blind on sales fundamentals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-red-50 to-pink-50 p-10 rounded-3xl border border-red-100 hover:shadow-xl hover:shadow-red-100/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-4">❌</div>
              <div className="text-red-700 font-bold text-lg mb-3">Wrong ICP</div>
              <p className="text-slate-700 leading-relaxed">
                You're pitching companies that will never buy because you defined your target market with surface-level firmographics.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 p-10 rounded-3xl border border-orange-100 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-4">❌</div>
              <div className="text-orange-700 font-bold text-lg mb-3">Bad Messaging</div>
              <p className="text-slate-700 leading-relaxed">
                Your LinkedIn messages get 2% response rates because you're leading with features instead of pain.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-yellow-50 to-amber-50 p-10 rounded-3xl border border-yellow-100 hover:shadow-xl hover:shadow-yellow-100/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-4">❌</div>
              <div className="text-amber-700 font-bold text-lg mb-3">Missing Channels</div>
              <p className="text-slate-700 leading-relaxed">
                You're only doing cold outbound while competitors are winning through communities and partnerships you don't know exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 font-[family-name:var(--font-playfair)]">
              Get your first 10 qualified conversations in under 2 weeks
            </h2>
            <p className="text-xl text-indigo-100 leading-relaxed font-light">
              ClosingKit walks you through the exact process successful founders use to validate
              their ICP, craft messages that convert, and identify the right channels—step by step.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-playfair)]">
              Five modules. One clear path to revenue.
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Everything you need to go from zero sales to a repeatable pipeline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ICP Workshop */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">ICP Workshop</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Interview-style questions that surface real buying signals beyond company size and industry.
                Get a scorecard for evaluating any prospect.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Pain severity indicators</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Budget authority signals</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Buying trigger identification</span>
                </li>
              </ul>
            </div>

            {/* Message Lab */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Lab</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Craft and test multiple value props with templates based on what's working for similar companies.
                Channel-specific formatting included.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>A/B test tracker</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Email & LinkedIn templates</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Message variant generator</span>
                </li>
              </ul>
            </div>

            {/* Prospect Finder */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Prospect Finder</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Find specific companies and people matching your ICP scorecard.
                Get contact data and context for personalized outreach.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>ICP-based filtering</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Warm intro path detection</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Data source integration</span>
                </li>
              </ul>
            </div>

            {/* Channel Playbooks */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Megaphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Channel Playbooks</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Decision tree shows which channels to prioritize for your specific market.
                Step-by-step guides with realistic benchmarks.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Outbound sequences</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Partnership frameworks</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Community strategies</span>
                </li>
              </ul>
            </div>

            {/* Deal Tracker */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 hover:shadow-2xl hover:shadow-rose-100/50 transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Deal Tracker</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Simple tracking that shows what's actually working.
                Response rates, meeting rates, and close rates by message and channel.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Conversation tracking</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Channel performance metrics</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Pivot indicators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-playfair)]">
              Your first two weeks with ClosingKit
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-8 group">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Define your ICP (Day 1-2)</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Answer guided questions about your best prospects. Get a clear scorecard that goes
                  beyond "Series A SaaS companies" to identify real buying signals.
                </p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Craft your message (Day 3-4)</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Test 3-5 different value props using our templates. Format them for email, LinkedIn,
                  and warm intros. Set up basic tracking.
                </p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Build your list (Day 5-7)</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Use our prospect finder to identify 50-100 companies that match your ICP scorecard.
                  Get contacts and context for personalization.
                </p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Execute and learn (Day 8-14)</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Start outreach using our channel playbooks. Track what's working.
                  Adjust your message or ICP based on real response data—not guesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-24 bg-slate-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div>
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">&lt; 2 weeks</div>
              <div className="text-slate-300 text-lg">To first 10 qualified conversations</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5 modules</div>
              <div className="text-slate-300 text-lg">Complete sales foundation</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">$0-500K ARR</div>
              <div className="text-slate-300 text-lg">Built for early-stage founders</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="waitlist" className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-playfair)]">
              Stop guessing.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Start closing.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed">
              Join the waitlist to get early access to ClosingKit.
              <br />
              We're launching soon with a special founder rate.
            </p>

            <form className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl focus:outline-none text-lg"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 text-lg font-semibold whitespace-nowrap hover:scale-105"
                >
                  Join Waitlist
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-6">
                No spam. Just updates on our launch and early access.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-600">
              © 2025 ClosingKit.ai. Built for founders who need to figure out sales.
            </div>
            <div className="flex gap-8">
              <Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                Twitter
              </Link>
              <Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                LinkedIn
              </Link>
              <Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
