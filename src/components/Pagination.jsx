import React from 'react'

export const Pagination = ({totalProducts, productosPorPagina, setCurrentPage, currentPage}) /* destructuramos todo */ => {
  const pageNumbers = [];

/* console.log(Math.ceil(totalProducts / productosPorPagina)) */ /* Math.ceil retorna un nro entero */

for (let i = 1; i <= Math.ceil(totalProducts / productosPorPagina); i++){  /* si es menor o igual a 4 (totalProducts/productosPorPagina) i sera i++ */
  pageNumbers.push(i)
}

const onPreviousPage = () => {
  setCurrentPage(currentPage - 1)
}

const onNextPage = () => {
  setCurrentPage(currentPage + 1)
}

const onSpecificPage = (n) => {
  setCurrentPage(n)
}
  return (
    <nav className="pagination is-centered mb-6 mt-3" role="navigation" aria-label="pagination">
  <button className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviousPage}>Previous</button >
  <button className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`} onClick={onNextPage}>Next page</button >
  <ul className="pagination-list">
    {
      pageNumbers.map(noPage => (
        <li key={noPage}><a className={`pagination-link ${noPage === currentPage ? 'is-current' : ''}`} onClick={(() => onSpecificPage(noPage))} >{noPage}</a></li> /* como la funcion onSpecificPage esta tomando un parametro (n) necesita ser colocada en forma de callback "() => function()" */
        
      ))
    }
   
  </ul>
</nav>
  )
}
