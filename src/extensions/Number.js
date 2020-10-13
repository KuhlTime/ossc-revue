/**
 * Returns a string replacing a zero with a dash.
 */
Number.prototype.representZeroWithDash = function() {
  return this.valueOf() == 0 ? '-' : String(this.valueOf())
}
