import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    List,
    ListItem,
    Typography,
    Box,
    Button,
    Avatar,
    Checkbox,
    FormControlLabel,
    Grid,
    Divider,
    Menu,
    MenuItem,
    Paper,
} from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useMediaQuery } from '@mui/material';

const FlightResults = ({ flights }) => {
    const [visibleColumns, setVisibleColumns] = useState({
        airline: true,
        departure: true,
        arrival: true,
        duration: true,
        stops: true,
    });

    const [currentPage, setCurrentPage] = useState(0);
    const [sortKey, setSortKey] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const itemsPerPage = 20;

    // Check if screen is medium or smaller
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const handleColumnToggle = (column) => {
        setVisibleColumns((prev) => ({
            ...prev,
            [column]: !prev[column],
        }));
    };

    const formatDuration = (durationInMinutes) => {
        const hours = Math.floor(durationInMinutes / 60);
        const minutes = durationInMinutes % 60;
        return `${hours}h ${minutes}min`;
    };

    const handleSortMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSortMenuClose = () => {
        setAnchorEl(null);
    };

    const sortFlights = (key) => {
        setSortKey(key);
        handleSortMenuClose();
    };

    // Sort flights based on the selected key
    const sortedFlightData = flights.slice().sort((a, b) => {
        let compareValue = 0;

        switch (sortKey) {
            case 'departure':
                compareValue = new Date(a.departureTime) - new Date(b.departureTime);
                break;
            case 'arrival':
                compareValue = new Date(a.arrivalTime) - new Date(b.arrivalTime);
                break;
            case 'duration':
                compareValue = a.duration - b.duration;
                break;
            default:
                return 0;
        }

        return compareValue;
    });

    // Handle pagination
    const currentFlightData = sortedFlightData.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

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
                {!isSmallScreen ? (
                    <Grid item>
                        <Button
                            variant="text"
                            startIcon={<FilterListIcon />}
                            onClick={() => setShowFilters((prev) => !prev)}
                            sx={{ textTransform: 'none' }}
                        >
                            Filters
                        </Button>
                        <Button
                            variant="text"
                            startIcon={<SortIcon />}
                            onClick={handleSortMenuClick}
                            sx={{ textTransform: 'none' }}
                        >
                            Sort
                        </Button>
                    </Grid>
                ) : (
                    <Grid container spacing={1}>
                        <Grid item>
                            <Button
                                variant="text"
                                onClick={() => setShowFilters((prev) => !prev)}
                                sx={{ textTransform: 'none' }}
                            >
                                Filters
                                <FilterListIcon sx={{ marginLeft: 0.5 }} />
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="text"
                                onClick={handleSortMenuClick}
                                sx={{ textTransform: 'none' }}
                            >
                                Sort
                                <SortIcon sx={{ marginLeft: 0.5 }} />
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Grid>

            {/* Display filters if showFilters is true */}
            {showFilters && (
                <Paper variant="outlined" sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h6">Filter Options</Typography>
                    <Divider sx={{ marginBottom: 1 }} />
                    <List>
                        {Object.keys(visibleColumns).map((column) => (
                            <ListItem key={column}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={visibleColumns[column]}
                                            onChange={() => handleColumnToggle(column)}
                                            color="primary"
                                        />
                                    }
                                    label={column.charAt(0).toUpperCase() + column.slice(1)}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            )}

            <List>
                {currentFlightData.map((flight, index) => (
                    <React.Fragment key={index}>
                        <ListItem
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                borderRadius: '4px',
                                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                                padding: 1.5,
                                marginBottom: 1.5,
                                backgroundColor: '#f9f9f9',
                                minHeight: 'auto',
                            }}
                        >
                            {/* Header with Airline Info */}
                            {visibleColumns.airline && (
                                <Grid
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                        marginBottom: 0.5,
                                    }}
                                >
                                    <Avatar
                                        src={flight.carrierLogo}
                                        alt={flight.carrierName}
                                        sx={{ width: 24, height: 24, marginRight: 1 }}
                                    />
                                    <Typography variant="subtitle2" sx={{ fontWeight: '500', fontSize: '0.85rem' }}>
                                        {flight.carrierName}
                                    </Typography>
                                </Grid>
                            )}
                            {/* Flight Details */}
                            <Grid container justifyContent="center" sx={{ width: '100%' }}>
                                {visibleColumns.departure && (
                                    <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: 1 }}>
                                        <Typography variant="caption" color="textSecondary">
                                            <strong>Departure:</strong> {new Date(flight.departureTime).toLocaleString()}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                                            {flight.originAirportName} ({flight.originAirportCode})
                                        </Typography>
                                    </Grid>
                                )}
                                {visibleColumns.arrival && (
                                    <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: 1 }}>
                                        <Typography variant="caption" color="textSecondary">
                                            <strong>Arrival:</strong> {new Date(flight.arrivalTime).toLocaleString()}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                                            {flight.arrivalAirportName} ({flight.arrivalAirportCode})
                                        </Typography>
                                    </Grid>
                                )}
                                {visibleColumns.duration && (
                                    <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: 1 }}>
                                        <Typography variant="caption" color="textSecondary">
                                            <strong>Duration:</strong> {formatDuration(flight.duration)}
                                        </Typography>
                                    </Grid>
                                )}
                                {visibleColumns.stops && (
                                    <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: 1 }}>
                                        <Typography variant="caption" color="textSecondary">
                                            <strong>Stops:</strong> {flight.stopCount === 0 ? 'Non-stop' : `${flight.stopCount} stop(s)`}
                                        </Typography>
                                    </Grid>
                                )}
                            </Grid>
                        </ListItem>
                        <Divider variant="fullWidth" sx={{ my: 1 }} />
                    </React.Fragment>
                ))}
            </List>

            {/* Pagination controls */}
            <Box display="flex" justifyContent="space-between" mt={2}>
                <Button onClick={handlePreviousPage} disabled={currentPage === 0}>
                    Previous
                </Button>
                <Button onClick={handleNextPage} disabled={currentFlightData.length < itemsPerPage}>
                    Next
                </Button>
            </Box>

            {/* Sort Menu */}
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleSortMenuClose}>
                <MenuItem onClick={() => sortFlights('departure')}>Departure</MenuItem>
                <MenuItem onClick={() => sortFlights('arrival')}>Arrival</MenuItem>
                <MenuItem onClick={() => sortFlights('duration')}>Duration</MenuItem>
            </Menu>
        </Box>
    );
};

FlightResults.propTypes = {
    flights: PropTypes.array.isRequired,
};

export default FlightResults;