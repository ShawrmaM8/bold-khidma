export interface HistoryItem {
  id: string;
  type: 'dua' | 'charity' | 'action';
  title: string;
  community: string;
  timestamp: number;
  details?: string;
}

const HISTORY_KEY = 'ummah_united_history';

export const getHistory = (): HistoryItem[] => {
  try {
    const stored = localStorage.getItem(HISTORY_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const addToHistory = (item: Omit<HistoryItem, 'id' | 'timestamp'>): void => {
  const history = getHistory();
  const newItem: HistoryItem = {
    ...item,
    id: `${Date.now()}-${Math.random()}`,
    timestamp: Date.now(),
  };
  history.unshift(newItem);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 100))); // Keep last 100 items
};
