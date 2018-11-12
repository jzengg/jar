import React from 'react'
import Select from 'react-select'
import { css } from 'react-emotion'

export default (props) => {
    const { selectedJarOption, options, handleChange } = props

    return (
      <Select
        className={css`
          div {
            overflow: visible;
          }
          max-width: 275px;
          margin-bottom: 1rem;
          `}
        name='jar'
        isSearchable={false}
        onChange={handleChange}
        options={options}
        value={selectedJarOption}
      />
    )

}
