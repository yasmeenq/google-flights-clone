

# I used this to destruct the structure of the JSON code just to understand it better.

import json


with open('response.json', 'r') as file:
    data = json.load(file)

def capture_structure(obj, parent_key='', result=None):
    if result is None:
        result = {}

    if isinstance(obj, dict):
        for key, value in obj.items():
            new_key = f"{parent_key}.{key}" if parent_key else key
            if isinstance(value, (dict, list)):
                result[new_key] = 'nested'
                capture_structure(value, new_key, result)  # Recurse into nested structures
            else:
                result[new_key] = type(value).__name__  # Capture the type of the value
    elif isinstance(obj, list):
        if obj:
            result[parent_key] = 'list of ' + type(obj[0]).__name__  # Capture the type of list items
            capture_structure(obj[0], parent_key, result)  # Recurse into the first element
        else:
            result[parent_key] = 'empty list'
    else:
        result[parent_key] = type(obj).__name__  # Capture type of the non-nested value

    return result



structure = capture_structure(data)

for key, value in structure.items():
    print(f"Key: {key}, Type: {value}")



#output: 
# Key: status, Type: bool
# Key: message, Type: str
# Key: data, Type: nested
# Key: data.context, Type: nested
# Key: data.context.status, Type: str
# Key: data.context.sessionId, Type: str
# Key: data.context.totalResults, Type: int
# Key: data.itineraries, Type: list of dict
# Key: data.itineraries.id, Type: str
# Key: data.itineraries.price, Type: nested
# Key: data.itineraries.price.raw, Type: float
# Key: data.itineraries.price.formatted, Type: str
# Key: data.itineraries.price.pricingOptionId, Type: str
# Key: data.itineraries.legs, Type: list of dict
# Key: data.itineraries.legs.id, Type: str
# Key: data.itineraries.legs.origin, Type: nested
# Key: data.itineraries.legs.origin.id, Type: str
# Key: data.itineraries.legs.origin.entityId, Type: str
# Key: data.itineraries.legs.origin.name, Type: str
# Key: data.itineraries.legs.origin.displayCode, Type: str
# Key: data.itineraries.legs.origin.city, Type: str
# Key: data.itineraries.legs.origin.country, Type: str
# Key: data.itineraries.legs.origin.isHighlighted, Type: bool
# Key: data.itineraries.legs.destination, Type: nested
# Key: data.itineraries.legs.destination.id, Type: str
# Key: data.itineraries.legs.destination.entityId, Type: str
# Key: data.itineraries.legs.destination.name, Type: str
# Key: data.itineraries.legs.destination.displayCode, Type: str       
# Key: data.itineraries.legs.destination.city, Type: str
# Key: data.itineraries.legs.destination.country, Type: str
# Key: data.itineraries.legs.destination.isHighlighted, Type: bool    
# Key: data.itineraries.legs.durationInMinutes, Type: int
# Key: data.itineraries.legs.stopCount, Type: int
# Key: data.itineraries.legs.isSmallestStops, Type: bool
# Key: data.itineraries.legs.departure, Type: str
# Key: data.itineraries.legs.arrival, Type: str
# Key: data.itineraries.legs.timeDeltaInDays, Type: int
# Key: data.itineraries.legs.carriers, Type: nested
# Key: data.itineraries.legs.carriers.marketing, Type: list of dict   
# Key: data.itineraries.legs.carriers.marketing.id, Type: int
# Key: data.itineraries.legs.carriers.marketing.alternateId, Type: str
# Key: data.itineraries.legs.carriers.marketing.logoUrl, Type: str
# Key: data.itineraries.legs.carriers.marketing.name, Type: str
# Key: data.itineraries.legs.carriers.operationType, Type: str
# Key: data.itineraries.legs.segments, Type: list of dict
# Key: data.itineraries.legs.segments.id, Type: str
# Key: data.itineraries.legs.segments.origin, Type: nested
# Key: data.itineraries.legs.segments.origin.flightPlaceId, Type: str
# Key: data.itineraries.legs.segments.origin.displayCode, Type: str
# Key: data.itineraries.legs.segments.origin.parent, Type: nested
# Key: data.itineraries.legs.segments.origin.parent.flightPlaceId, Type: str
# Key: data.itineraries.legs.segments.origin.parent.displayCode, Type: str
# Key: data.itineraries.legs.segments.origin.parent.name, Type: str
# Key: data.itineraries.legs.segments.origin.parent.type, Type: str
# Key: data.itineraries.legs.segments.origin.name, Type: str
# Key: data.itineraries.legs.segments.origin.type, Type: str
# Key: data.itineraries.legs.segments.origin.country, Type: str
# Key: data.itineraries.legs.segments.destination, Type: nested
# Key: data.itineraries.legs.segments.destination.flightPlaceId, Type: str
# Key: data.itineraries.legs.segments.destination.displayCode, Type: str
# Key: data.itineraries.legs.segments.destination.parent, Type: nested
# Key: data.itineraries.legs.segments.destination.parent.flightPlaceId, Type: str
# Key: data.itineraries.legs.segments.destination.parent.displayCode, Type: str
# Key: data.itineraries.legs.segments.destination.parent.name, Type: str
# Key: data.itineraries.legs.segments.destination.parent.type, Type: str
# Key: data.itineraries.legs.segments.destination.name, Type: str
# Key: data.itineraries.legs.segments.destination.type, Type: str
# Key: data.itineraries.legs.segments.destination.country, Type: str
# Key: data.itineraries.legs.segments.departure, Type: str
# Key: data.itineraries.legs.segments.arrival, Type: str
# Key: data.itineraries.legs.segments.durationInMinutes, Type: int
# Key: data.itineraries.legs.segments.flightNumber, Type: str
# Key: data.itineraries.legs.segments.marketingCarrier, Type: nested
# Key: data.itineraries.legs.segments.marketingCarrier.id, Type: int
# Key: data.itineraries.legs.segments.marketingCarrier.name, Type: str
# Key: data.itineraries.legs.segments.marketingCarrier.alternateId, Type: str
# Key: data.itineraries.legs.segments.marketingCarrier.allianceId, Type: int
# Key: data.itineraries.legs.segments.marketingCarrier.displayCode, Type: str
# Key: data.itineraries.legs.segments.operatingCarrier, Type: nested
# Key: data.itineraries.legs.segments.operatingCarrier.id, Type: int
# Key: data.itineraries.legs.segments.operatingCarrier.name, Type: str
# Key: data.itineraries.legs.segments.operatingCarrier.alternateId, Type: str
# Key: data.itineraries.legs.segments.operatingCarrier.allianceId, Type: int
# Key: data.itineraries.legs.segments.operatingCarrier.displayCode, Type: str
# Key: data.itineraries.isSelfTransfer, Type: bool
# Key: data.itineraries.isProtectedSelfTransfer, Type: bool
# Key: data.itineraries.farePolicy, Type: nested
# Key: data.itineraries.farePolicy.isChangeAllowed, Type: bool
# Key: data.itineraries.farePolicy.isPartiallyChangeable, Type: bool
# Key: data.itineraries.farePolicy.isCancellationAllowed, Type: bool
# Key: data.itineraries.farePolicy.isPartiallyRefundable, Type: bool
# Key: data.itineraries.eco, Type: nested
# Key: data.itineraries.eco.ecoContenderDelta, Type: float
# Key: data.itineraries.fareAttributes, Type: nested
# Key: data.itineraries.tags, Type: str
# Key: data.itineraries.isMashUp, Type: bool
# Key: data.itineraries.hasFlexibleOptions, Type: bool
# Key: data.itineraries.score, Type: float
# Key: data.messages, Type: empty list
# Key: data.filterStats, Type: nested
# Key: data.filterStats.duration, Type: nested
# Key: data.filterStats.duration.min, Type: int
# Key: data.filterStats.duration.max, Type: int
# Key: data.filterStats.duration.multiCityMin, Type: int
# Key: data.filterStats.duration.multiCityMax, Type: int
# Key: data.filterStats.airports, Type: list of dict
# Key: data.filterStats.airports.city, Type: str
# Key: data.filterStats.airports.airports, Type: list of dict
# Key: data.filterStats.airports.airports.id, Type: str
# Key: data.filterStats.airports.airports.entityId, Type: str
# Key: data.itineraries.farePolicy, Type: nested
# Key: data.itineraries.farePolicy.isChangeAllowed, Type: bool
# Key: data.itineraries.farePolicy.isPartiallyChangeable, Type: bool
# Key: data.itineraries.farePolicy.isCancellationAllowed, Type: bool
# Key: data.itineraries.farePolicy.isPartiallyRefundable, Type: bool
# Key: data.itineraries.eco, Type: nested
# Key: data.itineraries.eco.ecoContenderDelta, Type: float
# Key: data.itineraries.fareAttributes, Type: nested
# Key: data.itineraries.tags, Type: str
# Key: data.itineraries.isMashUp, Type: bool
# Key: data.itineraries.hasFlexibleOptions, Type: bool
# Key: data.itineraries.score, Type: float
# Key: data.messages, Type: empty list
# Key: data.filterStats, Type: nested
# Key: data.filterStats.duration, Type: nested
# Key: data.filterStats.duration.min, Type: int
# Key: data.filterStats.duration.max, Type: int
# Key: data.filterStats.duration.multiCityMin, Type: int
# Key: data.filterStats.duration.multiCityMax, Type: int
# Key: data.filterStats.airports, Type: list of dict
# Key: data.filterStats.airports.city, Type: str
# Key: data.filterStats.airports.airports, Type: list of dict
# Key: data.filterStats.airports.airports.id, Type: str
# Key: data.filterStats.airports.airports.entityId, Type: str
# Key: data.itineraries.farePolicy.isPartiallyChangeable, Type: bool
# Key: data.itineraries.farePolicy.isCancellationAllowed, Type: bool
# Key: data.itineraries.farePolicy.isPartiallyRefundable, Type: bool
# Key: data.itineraries.eco, Type: nested
# Key: data.itineraries.eco.ecoContenderDelta, Type: float
# Key: data.itineraries.fareAttributes, Type: nested
# Key: data.itineraries.tags, Type: str
# Key: data.itineraries.isMashUp, Type: bool
# Key: data.itineraries.hasFlexibleOptions, Type: bool
# Key: data.itineraries.score, Type: float
# Key: data.messages, Type: empty list
# Key: data.filterStats, Type: nested
# Key: data.filterStats.duration, Type: nested
# Key: data.filterStats.duration.min, Type: int
# Key: data.filterStats.duration.max, Type: int
# Key: data.filterStats.duration.multiCityMin, Type: int
# Key: data.filterStats.duration.multiCityMax, Type: int
# Key: data.filterStats.airports, Type: list of dict
# Key: data.filterStats.airports.city, Type: str
# Key: data.filterStats.airports.airports, Type: list of dict
# Key: data.filterStats.airports.airports.id, Type: str
# Key: data.filterStats.airports.airports.entityId, Type: str
# Key: data.itineraries.eco.ecoContenderDelta, Type: float
# Key: data.itineraries.fareAttributes, Type: nested
# Key: data.itineraries.tags, Type: str
# Key: data.itineraries.isMashUp, Type: bool
# Key: data.itineraries.hasFlexibleOptions, Type: bool
# Key: data.itineraries.score, Type: float
# Key: data.messages, Type: empty list
# Key: data.filterStats, Type: nested
# Key: data.filterStats.duration, Type: nested
# Key: data.filterStats.duration.min, Type: int
# Key: data.filterStats.duration.max, Type: int
# Key: data.filterStats.duration.multiCityMin, Type: int
# Key: data.filterStats.duration.multiCityMax, Type: int
# Key: data.filterStats.airports, Type: list of dict
# Key: data.filterStats.airports.city, Type: str
# Key: data.filterStats.airports.airports, Type: list of dict
# Key: data.filterStats.airports.airports.id, Type: str
# Key: data.filterStats.airports.airports.entityId, Type: str
# Key: data.itineraries.score, Type: float
# Key: data.messages, Type: empty list
# Key: data.filterStats, Type: nested
# Key: data.filterStats.duration, Type: nested
# Key: data.filterStats.duration.min, Type: int
# Key: data.filterStats.duration.max, Type: int
# Key: data.filterStats.duration.multiCityMin, Type: int
# Key: data.filterStats.duration.multiCityMax, Type: int
# Key: data.filterStats.airports, Type: list of dict
# Key: data.filterStats.airports.city, Type: str
# Key: data.filterStats.airports.airports, Type: list of dict
# Key: data.filterStats.airports.airports.id, Type: str
# Key: data.filterStats.airports.airports.entityId, Type: str
# Key: data.filterStats.duration.multiCityMax, Type: int
# Key: data.filterStats.airports, Type: list of dict
# Key: data.filterStats.airports.city, Type: str
# Key: data.filterStats.airports.airports, Type: list of dict
# Key: data.filterStats.airports.airports.id, Type: str
# Key: data.filterStats.airports.airports.entityId, Type: str
# Key: data.filterStats.airports.airports.id, Type: str
# Key: data.filterStats.airports.airports.entityId, Type: str
# Key: data.filterStats.airports.airports.entityId, Type: str
# Key: data.filterStats.airports.airports.name, Type: str
# Key: data.filterStats.carriers, Type: list of dict
# Key: data.filterStats.carriers.id, Type: int
# Key: data.filterStats.carriers.id, Type: int
# Key: data.filterStats.carriers.alternateId, Type: str
# Key: data.filterStats.carriers.logoUrl, Type: str
# Key: data.filterStats.carriers.name, Type: str
# Key: data.filterStats.stopPrices, Type: nested
# Key: data.filterStats.stopPrices.direct, Type: nested
# Key: data.filterStats.stopPrices.direct.isPresent, Type: bool
# Key: data.filterStats.stopPrices.direct.formattedPrice, Type: str
# Key: data.filterStats.stopPrices.one, Type: nested
# Key: data.filterStats.stopPrices.one.isPresent, Type: bool
# Key: data.filterStats.stopPrices.one.formattedPrice, Type: str
# Key: data.filterStats.stopPrices.twoOrMore, Type: nested
# Key: data.filterStats.stopPrices.twoOrMore.isPresent, Type: bool
# Key: data.flightsSessionId, Type: str
# Key: data.destinationImageUrl, Type: str