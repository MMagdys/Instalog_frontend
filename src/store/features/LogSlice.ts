import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Log from '../../models/Log';
import { RootState } from '../index';
import ApiClient from '../../utils/ApiClient';
import Paths from '../../routes/Paths';
import { Page, PageInfo } from '../../models/Request';


interface LogsState {
    logList: Log[];
    status: boolean;
    pageInfo: PageInfo | null;
}

const initialState: LogsState = {
  logList: [],
  status: false,
  pageInfo: null
}


const logSlice = createSlice({
    name: 'logs',
    initialState,
    reducers: {
      saveLogs(state, action) {
        state.logList = action.payload;
      }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchLogs.pending, (state, action) => {
            state.status = true
          })
          .addCase(fetchLogs.fulfilled, (state, action) => {
            state.status = false
            const firstPage = !state.pageInfo? true: false;
            const samePage = state.pageInfo && state.pageInfo.currentPage == action.payload.pageInfo.currentPage
            const newSearch = action.payload.pageInfo.currentPage == 1

            if(firstPage || !samePage) {
              state.logList.push.apply(state.logList, action.payload.records)
              state.pageInfo = action.payload.pageInfo
            }

            if(newSearch) {
              state.logList = action.payload.records
              state.pageInfo = action.payload.pageInfo
            }
          })
          .addCase(fetchLogs.rejected, (state, action) => {
            state.status = false
          })
      }

});


export const fetchLogs = createAsyncThunk(
    'logs/fetchLogs',
    async (filter: any): Promise<Page<Log>> => {
      const response = await ApiClient({
        url: Paths.logs.list,
        method: 'GET',
        params: filter
      })
      return response.data.page
    }
)


export const { saveLogs } = logSlice.actions

export const selectLogsList = (state: RootState) => {
  return {
    logList: state.logs.logList,
    status: state.logs.status,
    pageInfo: state.logs.pageInfo,
 }
}


export default logSlice.reducer