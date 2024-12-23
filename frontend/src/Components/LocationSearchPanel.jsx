const LocationSearchPanel = ({ suggestions, setPickup, setDestination, setPanelOpen, activeField }) => {
    return (
        <div>
            {suggestions.map((suggestion, index) => (
                <div
                    key={index}
                    onClick={() => {
                        if (activeField === 'pickup') {
                            setPickup(suggestion.description); // Use a specific field like `description`
                        } else if (activeField === 'destination') {
                            setDestination(suggestion.description); // Use a specific field like `description`
                        }
                        // setPanelOpen(false);
                    }}
                    className="flex gap-4 p-3 border-2 rounded-xl border-gray-100 active:border-black items-center my-2 justify-start cursor-pointer hover:bg-gray-200"
                >
                    <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                    <h4 className="font-medium">{suggestion.description}</h4>
                </div>
            ))}
        </div>
    );
};

export default LocationSearchPanel;
