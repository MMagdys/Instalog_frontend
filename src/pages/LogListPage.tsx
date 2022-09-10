import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import LogTable from "../components/Table";
import { fetchLogs, selectLogsList } from "../store/features/LogSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";


export default function LogListPage() {

    const { logList, status, pageInfo } = useAppSelector(selectLogsList);
    const [page, setPage] = React.useState(1);
    const [searchString, setSearchString] = React.useState<string>();
    const dispatch = useAppDispatch();

    const handleLoadMore = () => {
        if(!pageInfo){
            return
        }
        if(pageInfo.nextPage == -1) {
            return
        }
        setPage(pageInfo.nextPage)
    }

    const handleSearch = (value: string) => {
        setSearchString(value);
        setPage(1);
    }

    useEffect(() => {
        dispatch(fetchLogs({page, searchString}))
    }, [dispatch, page, searchString])

    console.log(logList)

    return(
        <Box>
            <LogTable list={logList} pageInfo={pageInfo} handleLoadMore={handleLoadMore} handleSearch={handleSearch} />
        </Box>
    )
}