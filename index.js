IMask(document.querySelector('#credit-card-number'), {
  mask: '0000 0000 0000 0000'
})

IMask(document.querySelector('#credit-card-validity'), {
  mask: 'MM{/}YY',
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12
    },
    YY: {
      mask: '00',
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2)
    }
  }
})

IMask(document.querySelector('#credit-card-cvv'), {
  mask: '0000'
})

IMask(document.querySelector('#credit-card-cvv'), {
  mask: '0000'
})
