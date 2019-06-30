/**
 * we can use this to type guard the `null`
 */
function f(sn: string | null): string {
  if (sn === null) {
    return 'default';
  } else {
    return sn;
  }
}

// this is simpler.
function f2(sn: string | null): string {
  return sn || 'default';
}

function broken(name: string | null): string {
  // compiler can not know that name is not `null`
  function postfix(epithet: string) {
    return name.charAt(0) + '. the' + epithet; // error, 'name' is possibly null
  }

  name = name || 'Bob';
  return postfix(name);
}

// so we give it a `!` signature to remove `null` and `undefined` from the type of `identifier`
function broken1(name: string | null): string {
  // compiler can not know that name is not `null`
  function postfix(epithet: string) {
    return name!.charAt(0) + '. the' + epithet;
  }

  name = name || 'Bob';
  return postfix(name);
}
