const D = require('../src/index')
const { months, mons, days, dys } = require('../src/utils')

const today = new Date()
const d = new D(today)
const bDay = new D(2001, 0, 12)

test('D.year', () => {
    expect( d.year ).toBe( today.getFullYear() )
    expect( bDay.year ).toBe(2001)
})

test('D.month', () => {
    expect(bDay.month).toBe('January')
})

test('D.mon', () => {
    expect(bDay.mon).toBe('Jan')
})

test('D.day', () => {
    expect(bDay.day).toBe('Friday')
})

test('D.dy', () => {
    expect(bDay.dy).toBe('Fri')
})

