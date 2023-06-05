import { getContrast } from 'polished'
import { colors } from '@project-name-ui/tokens'
import React from 'react'

export function ColorsGrid() {
   return Object.entries(colors).map(([key, color]) => {
      return (
         <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'monospace',
                  color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
               }}
            >
               <strong>${key}</strong>
               <span>{color}</span>
            </div>
         </div>
      )
   })
}