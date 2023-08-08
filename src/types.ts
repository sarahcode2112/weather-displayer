export type WeatherResponse = { 
    resolvedAddress: string, 
    description: string, 
    days: { hours: 
      { datetime: string, temp: string }[]
    }[] 
  }