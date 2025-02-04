import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Typography, Box, Button, Avatar, Grid, Divider, Menu, MenuItem, Paper } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { useMediaQuery } from '@mui/material';

export function FlightResults({ flights }): JSX.Element {
    const [currentPage, setCurrentPage] = useState(0);
    const [sortKey, setSortKey] = useState('');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const itemsPerPage = 5;

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const formatDuration = (durationInMinutes: number): string => {
        const hours = Math.floor(durationInMinutes / 60);
        const minutes = durationInMinutes % 60;
        return `${hours}h ${minutes}min`;
    };

    const handleSortMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSortMenuClose = () => {
        setAnchorEl(null);
    };

    const sortFlights = (key: string) => {
        setSortKey(key);
        handleSortMenuClose();
    };

    const sortedFlightData = flights?.slice().sort((a, b) => {
        if (!a.legs[0] || !b.legs[0]) return 0;
        const legA = a.legs[0];
        const legB = b.legs[0];
        let compareValue = 0;

        switch (sortKey) {
            case 'departure':
                compareValue = new Date(legA.departure).getTime() - new Date(legB.departure).getTime();
                break;
            case 'arrival':
                compareValue = new Date(legA.arrival).getTime() - new Date(legB.arrival).getTime();
                break;
            case 'duration':
                compareValue = legA.durationInMinutes - legB.durationInMinutes;
                break;
            default:
                return 0;
        }

        return compareValue;
    });

    const currentFlightData = sortedFlightData?.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    ) || [];

    const handleNextPage = () => {
        setCurrentPage((prev) => prev + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                <Typography variant="h4">Flight Itineraries</Typography>
                <Button variant="text" startIcon={<SortIcon />} onClick={handleSortMenuClick} sx={{ textTransform: 'none' }}>
                    Sort
                </Button>
            </Grid>

            <List>
                {currentFlightData.map((flight) =>
                    flight.legs.map((leg) => (
                        <React.Fragment key={leg.id}>
                            <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 1.5, marginBottom: 1.5, backgroundColor: '#f9f9f9' }}>
                                <Grid sx={{ display: 'flex', alignItems: 'center', width: '100%', marginBottom: 0.5 }}>
                                    <Avatar src={leg.carriers?.marketing[0]?.logoUrl} alt={leg.carriers?.marketing[0]?.name} sx={{ width: 24, height: 24, marginRight: 1 }} />
                                    <Typography variant="subtitle2" sx={{ fontWeight: '500', fontSize: '0.85rem' }}>
                                        {leg.carriers?.marketing[0]?.name}
                                    </Typography>
                                </Grid>
                                <Grid container justifyContent="center" sx={{ width: '100%' }}>
                                    <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: 1 }}>
                                        <Typography variant="caption" color="textSecondary">
                                            <strong>Departure:</strong> {new Date(leg.departure).toLocaleString()}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                                            {leg.origin.name} ({leg.origin.displayCode})
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: 1 }}>
                                        <Typography variant="caption" color="textSecondary">
                                            <strong>Arrival:</strong> {new Date(leg.arrival).toLocaleString()}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                                            {leg.destination.name} ({leg.destination.displayCode})
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: 1 }}>
                                        <Typography variant="caption" color="textSecondary">
                                            <strong>Duration:</strong> {formatDuration(leg.durationInMinutes)}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: 1 }}>
                                        <Typography variant="caption" color="textSecondary">
                                            <strong>Stops:</strong> {leg.stopCount === 0 ? 'Non-stop' : `${leg.stopCount} stop(s)`}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <Divider variant="fullWidth" sx={{ my: 1 }} />
                        </React.Fragment>
                    ))
                )}
            </List>

            <Box display="flex" justifyContent="space-between" mt={2}>
                <Button onClick={handlePreviousPage} disabled={currentPage === 0}>Previous</Button>
                <Button onClick={handleNextPage} disabled={currentFlightData.length < itemsPerPage}>Next</Button>
            </Box>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleSortMenuClose}>
                <MenuItem onClick={() => sortFlights('departure')}>Departure</MenuItem>
                <MenuItem onClick={() => sortFlights('arrival')}>Arrival</MenuItem>
                <MenuItem onClick={() => sortFlights('duration')}>Duration</MenuItem>
            </Menu>
        </Box>
    );
}

FlightResults.propTypes = {
    flights: PropTypes.array.isRequired,
};
