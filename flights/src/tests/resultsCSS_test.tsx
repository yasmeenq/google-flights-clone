import { Box, Button, Divider, Grid, List, Paper, Typography } from "@mui/material";



export function ResultsTest() {


    return (
        <Box sx={{ padding: 2 }}>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 2 }}
            >
                <Typography variant="h4">Flight Itineraries</Typography>
                {/* {!isSmallScreen ? (
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
                ) : ( */}
                    <Grid container spacing={1}>
                        <Grid item>
                            <Button
                                variant="text"
                                // onClick={() => setShowFilters((prev) => !prev)}
                                sx={{ textTransform: 'none' }}
                            >
                                Filters
                                {/* <FilterListIcon sx={{ marginLeft: 0.5 }} /> */}
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="text"
                                // onClick={handleSortMenuClick}
                                sx={{ textTransform: 'none' }}
                            >
                                Sort
                                {/* <SortIcon sx={{ marginLeft: 0.5 }} /> */}
                            </Button>
                        </Grid>
                    </Grid>
                
            </Grid>

            {/* Display filters if showFilters is true */}
            {/* {showFilters && ( */}
                <Paper variant="outlined" sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h6">Filter Options</Typography>
                    <Divider sx={{ marginBottom: 1 }} />
                    <List>
                        {Object.keys(visibleColumns).map((column) => (
                            <ListItem key={column}>
                                {/* <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={visibleColumns[column]}
                                            onChange={() =>
                                                handleColumnToggle(column)
                                            }
                                            color="primary"
                                        /> */}
                                    }
                                    label={
                                        column.charAt(0).toUpperCase() +
                                        column.slice(1)
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            )}

            <List>
                {currentFlightData?.map((itinerary) =>
                    itinerary.legs.map((leg) => (
                        <React.Fragment key={leg.id}>
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
                                {/* {visibleColumns.airline && (
                                    <Grid
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: '100%',
                                            marginBottom: 0.5,
                                        }}
                                    >
                                        <Avatar
                                            src={
                                                leg.carriers.marketing[0]
                                                    .logoUrl
                                            }
                                            alt={leg.carriers.marketing[0].name}
                                            sx={{
                                                width: 24,
                                                height: 24,
                                                marginRight: 1,
                                            }}
                                        />
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontWeight: '500',
                                                fontSize: '0.85rem',
                                            }}
                                        >
                                            {leg.carriers.marketing[0].name}
                                        </Typography>
                                    </Grid>
                                )}
 */}


                                {/* Flight Details */}
                                <Grid
                                    container
                                    justifyContent="center"
                                    sx={{ width: '100%' }}
                                >
                                    {visibleColumns.departure && (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={3}
                                            sx={{ marginBottom: 1 }}
                                        >
                                            <Typography
                                                variant="caption"
                                                color="textSecondary"
                                            >
                                                <strong>Departure:</strong>{' '}
                                                {new Date(
                                                    leg.departure,
                                                ).toLocaleString()}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ fontSize: '0.8rem' }}
                                            >
                                                {leg.origin.name} (
                                                {leg.origin.displayCode})
                                            </Typography>
                                        </Grid>
                                    )}
                                    {visibleColumns.arrival && (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={3}
                                            sx={{ marginBottom: 1 }}
                                        >
                                            <Typography
                                                variant="caption"
                                                color="textSecondary"
                                            >
                                                <strong>Arrival:</strong>{' '}
                                                {new Date(
                                                    leg.arrival,
                                                ).toLocaleString()}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ fontSize: '0.8rem' }}
                                            >
                                                {leg.destination.name} (
                                                {leg.destination.displayCode})
                                            </Typography>
                                        </Grid>
                                    )}
                                    {visibleColumns.duration && (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={3}
                                            sx={{ marginBottom: 1 }}
                                        >
                                            <Typography
                                                variant="caption"
                                                color="textSecondary"
                                            >
                                                <strong>Duration:</strong>{' '}
                                                {formatDuration(
                                                    leg.durationInMinutes,
                                                )}
                                            </Typography>
                                        </Grid>
                                    )}
                                    {visibleColumns.stops && (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={3}
                                            sx={{ marginBottom: 1 }}
                                        >
                                            <Typography
                                                variant="caption"
                                                color="textSecondary"
                                            >
                                                <strong>Stops:</strong>{' '}
                                                {leg.stopCount === 0
                                                    ? 'Non-stop'
                                                    : `${leg.stopCount} stop(s)`}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontSize: '0.8rem',
                                                    fontWeight: 'bold',
                                                    color: 'primary.main',
                                                }}
                                            >
                                                {itinerary.price.formatted}
                                            </Typography>
                                        </Grid>
                                    )}
                                </Grid>
                            </ListItem>
                            <Divider variant="fullWidth" sx={{ my: 1 }} />
                        </React.Fragment>
                    )),
                )}
            </List>

            {/* Pagination controls */}
            {/* <Box display="flex" justifyContent="space-between" mt={2}>
                <Button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 0}
                >
                    Previous
                </Button>
                <Button
                    onClick={handleNextPage}
                    disabled={currentFlightData.length < itemsPerPage}
                >
                    Next
                </Button>
            </Box> */}

            {/* Sort Menu */}
            {/* <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleSortMenuClose}
            >
                <MenuItem onClick={() => sortFlights('price')}>Price</MenuItem>
                <MenuItem onClick={() => sortFlights('departure')}>
                    Departure
                </MenuItem>
                <MenuItem onClick={() => sortFlights('arrival')}>
                    Arrival
                </MenuItem>
                <MenuItem onClick={() => sortFlights('duration')}>
                    Duration
                </MenuItem>
            </Menu>
        </Box> */}
    );
}