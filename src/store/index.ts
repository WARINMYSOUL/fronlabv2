import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';

const preloadedState = {
    projects: {
        items: JSON.parse(localStorage.getItem('projects') || '[]'),
        status: 'idle' as const,
        error: null as string | null,
    }
};

export const store = configureStore({
    reducer: {
        projects: projectsReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    localStorage.setItem(
        'projects',
        JSON.stringify(store.getState().projects.items)
    );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
