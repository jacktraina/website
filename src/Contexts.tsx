import React from 'react'

interface DeviceSize {
    width: number,
    height: number,
    mobileSizeClass: boolean,
}

export const DeviceSizeContext = React.createContext<DeviceSize>({ width: 0, height: 0, mobileSizeClass: false })

export enum ThemeEnum { basic = 'basic', starWars = 'starWars' }
export type Theme = keyof typeof ThemeEnum