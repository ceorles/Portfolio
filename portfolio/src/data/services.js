import { Code2, Layout, MonitorSmartphone, Terminal, Wrench, Database } from 'lucide-react'

/** Services offered. Keep these realistic and short. */
export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Responsive websites and web apps built from scratch, front to back.',
    Icon: Code2,
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Component-based interfaces with React, clean state handling and accessible markup.',
    Icon: Layout,
  },
  {
    id: 'ui-implementation',
    title: 'UI Implementation',
    description: 'Turning a design or mockup into working, pixel-faithful, responsive layouts.',
    Icon: MonitorSmartphone,
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Desktop and console applications in Python, C# and C++ for everyday tasks.',
    Icon: Terminal,
  },
  {
    id: 'data',
    title: 'Database & Backend Logic',
    description: 'Schema design, queries and the server-side logic that keeps data consistent.',
    Icon: Database,
  },
  {
    id: 'maintenance',
    title: 'Fixes & Maintenance',
    description: 'Debugging, refactoring and small improvements to existing codebases.',
    Icon: Wrench,
  },
]
