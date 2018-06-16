import test from 'ava'

test('my passing test', t => {
  t.pass()
})

test('the one that fails', t => {
  t.is(1, 1)
})
