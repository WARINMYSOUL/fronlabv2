import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../types/Project';
import { getUserRepositories, mapRepositoryToProject } from "../services/githubService";

interface ProjectsState {
    items: Project[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProjectsState = {
    items: [],
    status: 'idle',
    error: null,
};

export const fetchProjectsFromGitHub = createAsyncThunk<Project[], string, { rejectValue: string }>(
    'projects/fetchFromGitHub',
    async (username, { rejectWithValue }) => {
        try {
            const repositories = await getUserRepositories(username);
            const projects: Project[] = repositories.map(mapRepositoryToProject);
            return projects;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('Неизвестная ошибка');
        }
    }
);

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProjects(state, action: PayloadAction<Project[]>) {
            state.items = action.payload;
        },
        addProject(state, action: PayloadAction<Project>) {
            state.items.push(action.payload);
        },
        removeProject(state, action: PayloadAction<number>) {
            state.items = state.items.filter(project => project.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjectsFromGitHub.pending, (state) => {
                console.log("Статус загрузки: loading");
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProjectsFromGitHub.fulfilled, (state, action) => {
                console.log("Статус загрузки: succeeded");
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProjectsFromGitHub.rejected, (state, action) => {
                console.log("Статус загрузки: failed", action.payload);
                state.status = 'failed';
                state.error = action.payload as string;
            });
    }
});

export const { setProjects, addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;