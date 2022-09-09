import { Stack, OutlinedInput, Button, ButtonGroup, Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


type Props = {
  filterName: string;
  onFilterName: (value: string) => void;
};



export default function TableSearchToolBar({ filterName, onFilterName }: Props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 2.5, px: 3, backgroundColor: '#F5F5F5'}}
    >
        <OutlinedInput
            id="table-search-bar"
            value={filterName}
            onChange={(event) => onFilterName(event.target.value)}
            placeholder="Search name, email or action..."
            fullWidth
            sx={{ height: '45px', borderRadius: '8px 0 0 8px', borderColor: '#E0E0DF' }}
          />

        <ButtonGroup variant="outlined" size='large' aria-label="outlined button group" sx={{ height: '45px', borderRadius: '0 8px 8px 0'  }}>
            <Button variant='outlined' startIcon={<FilterListIcon sx={{ color: '#575757' }} />}  sx={{ borderRadius: '0', color: 'text.disabled', borderColor: '#E0E0DF'  }}>
                <Typography sx={{ textTransform: 'uppercase', color: '#575757' }}>
                    Filter
                </Typography>
            </Button>
            <Button variant='outlined' startIcon={<SystemUpdateAltIcon sx={{ color: '#575757' }} />}  sx={{ borderRadius: '0', color: 'text.disabled', borderColor: '#E0E0DF'  }}>
                <Typography sx={{ textTransform: 'uppercase', color: '#575757' }}>
                    Export
                </Typography>
            </Button>
            <Button variant='outlined' startIcon={<FiberManualRecordIcon sx={{ color: '#8F485D' }} />}  sx={{ color: 'text.disabled', borderColor: '#E0E0DF'  }}>
                <Typography sx={{ textTransform: 'uppercase', color: '#575757' }}>
                    Live
                </Typography>
            </Button>
      </ButtonGroup>

    </Stack>
  );
}
