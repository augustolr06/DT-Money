import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { SearchFormContainer } from './SearchForm.styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
