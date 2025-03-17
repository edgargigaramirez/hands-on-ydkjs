const { expect } = require('chai')

describe('linked_lists', function () {
  it('remove_duplicates', function () {
    // unsorted list
    function remove_duplicates(head) {
      let set = new Set()
      let current = head
      let prev = null

      while (current != null) {
        if (set.has(current.value)) {
          prev.next = current.next
        } else {
          set.add(current.value)
          prev = current
        }
        current = current.next
      }
      return Array.from(set)
    }

    class Node {
      constructor(value) {
        this.value = value
        this.next = null
      }
    }

    var head = new Node(1)
    head.next = new Node(2)
    head.next.next = new Node(3)
    head.next.next.next = new Node(2)
    head.next.next.next.next = new Node(4)

    expect(remove_duplicates(head)).to.deep.equal([1, 2, 3, 4])

    head = new Node(1)
    head.next = new Node(2)
    head.next.next = new Node(3)
    head.next.next.next = new Node(2)
    head.next.next.next.next = new Node(4)
    head.next.next.next.next.next = new Node(4)
    head.next.next.next.next.next.next = new Node(5)

    expect(remove_duplicates(head)).to.deep.equal([1, 2, 3, 4, 5])
  })
})
