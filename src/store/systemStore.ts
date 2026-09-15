import { create } from 'zustand';

type SystemState = {
  activeSection: string;
  activeSectionIndex: string;
  blueprintState: string;
  setSystemState: (section: string, index: string, blueprint: string) => void;
};

export const useSystemStore = create<SystemState>((set) => ({
  activeSection: 'INTRO',
  activeSectionIndex: '01',
  blueprintState: 'IDEA',
  setSystemState: (section, index, blueprint) => 
    set({ activeSection: section, activeSectionIndex: index, blueprintState: blueprint }),
}));
