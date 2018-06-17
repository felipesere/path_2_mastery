import test from 'ava'
import { transform } from '../../src/drag-and-drop/list'

test('moves elements down the list', t => {
  const input = ['a', 'b', 'c', 'd', 'e']
  const result = transform(input).move(1, { to: 3 })
  t.deepEqual(result, ['a', 'c', 'd', 'b', 'e'])
})

test('moves elements up the list', t => {
  const input = ['a', 'b', 'c', 'd', 'e']
  const result = transform(input).move(3, { to: 0 })
  t.deepEqual(result, ['d', 'a', 'b', 'c', 'e'])
})
