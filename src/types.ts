export type Response = { 
    resolvedAddress: string, 
    description: string, 
    days: { hours: 
      { datetime: string, temp: string }[]
    }[] 
  }