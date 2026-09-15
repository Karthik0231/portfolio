import { create } from 'zustand';

type CursorType = 'DEFAULT' | 'INSPECT' | 'TRACE' | 'OPEN' | 'EXPLORE';

interface InteractionState {
  cursorType: CursorType;
  cursorLabel: string | null;
  activeTrace: string | null;
  isSystemOnline: boolean;
  
  setCursor: (type: CursorType, label?: string | null) => void;
  setTrace: (tech: string | null) => void;
  triggerSystemOnline: () => void;
}

export const useInteractionStore = create<InteractionState>((set) => ({
  cursorType: 'DEFAULT',
  cursorLabel: null,
  activeTrace: null,
  isSystemOnline: false,

  setCursor: (type, label = null) => set({ cursorType: type, cursorLabel: label }),
  setTrace: (tech) => set({ activeTrace: tech }),
  triggerSystemOnline: () => set({ isSystemOnline: true }),
}));
