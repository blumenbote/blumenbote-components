import React, { createContext } from 'react'
import { ConfigProvider } from '../ConfigContext'
import { SessionProvider } from '../SessionContext'
import { WebsocketProvider } from '../WebsocketContext'
import { OrderProvider } from '../OrderContext'
import { BusinessProvider } from '../BusinessContext'
import { LanguageProvider } from '../LanguageContext'
import { ApiProvider } from '../ApiContext'
import { EventProvider } from '../EventContext'
import { UtilsProviders } from '../UtilsContext'
import { ValidationFieldsProvider } from '../ValidationsFieldsContext'
import { CustomerProvider } from '../CustomerContext'
import { ToastProvider } from '../ToastContext'
import { WebStrategy } from '../../webStrategy'
import { OrderingThemeProvider } from '../OrderingThemeContext'
import { OptimizationLoadProvider } from '../OptimizationLoadContext'
import { CityProvider } from '../CityContext';

/**
 * Create OrderingContext
 * Wrapper to use all context to ordering apps
 */
export const OrderingContext = createContext()

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
export const OrderingProvider = ({ Alert, settings, isAlsea, children }) => {
  const webStrategy = new WebStrategy()
  const restOfSettings = {
    project: settings.project,
    appId: settings.app_id,
    countryCode: settings.countryCode,
    useOptimizeLoad: settings.useOptimizeLoad
  }
  return (
    <OrderingContext.Provider>
      <EventProvider>
        <ApiProvider settings={Object.assign(settings.api, restOfSettings)}>
          <OptimizationLoadProvider settings={Object.assign(settings.api, restOfSettings)}>
            <LanguageProvider strategy={webStrategy}>
              <ConfigProvider strategy={webStrategy}>
                <OrderingThemeProvider settings={Object.assign(settings.api, restOfSettings)}>
                  <CityProvider>
                    <UtilsProviders>
                      <ToastProvider>
                        <ValidationFieldsProvider>
                          <SessionProvider strategy={webStrategy}>
                            <WebsocketProvider
                              strategy={webStrategy}
                              settings={Object.assign(settings.socket, restOfSettings)}
                            >
                              <CustomerProvider strategy={webStrategy}>
                                <OrderProvider
                                  strategy={webStrategy}
                                  Alert={Alert}
                                  isAlsea={isAlsea}
                                  franchiseId={settings?.franchiseSlug ?? settings?.franchiseId}
                                  businessSlug={settings?.businessSlug}
                                >
                                  <BusinessProvider>
                                    {children}
                                  </BusinessProvider>
                                </OrderProvider>
                              </CustomerProvider>
                            </WebsocketProvider>
                          </SessionProvider>
                        </ValidationFieldsProvider>
                      </ToastProvider>
                    </UtilsProviders>
                  </CityProvider>
                </OrderingThemeProvider>
              </ConfigProvider>
            </LanguageProvider>
          </OptimizationLoadProvider>
        </ApiProvider>
      </EventProvider>
    </OrderingContext.Provider>
  )
}
