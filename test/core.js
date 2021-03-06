describe("Core", function() {
  var env = null;

  beforeEach(function() {
    cell.init();
    env = cell.environment;
  });

  it("executes simple mathematical operations", function() {
    var r = new cell.Reader("(+ 1 2 3)");
    var f = r.read()
    cell.init()
    expect(f.eval(cell.environment).data).toBe(6);

    var r = new cell.Reader("(+ 3 4)");
    var f = r.read()
    cell.init()
    expect(f.eval(cell.environment).data).toBe(7);

    var r = new cell.Reader("(- 14 4)");
    var f = r.read()
    cell.init()
    expect(f.eval(cell.environment).data).toBe(10);

    var r = new cell.Reader("(* 117 (+ 1 1))");
    var f = r.read()
    cell.init()
    expect(f.eval(cell.environment).data).toBe(234);

    var r = new cell.Reader("(/ 213 75)");
    var f = r.read()
    cell.init()
    expect(f.eval(cell.environment).data).toBe(2.84);
  });

  it("executes a simple lambda expression", function() {
    var r = new cell.Reader("((lambda (a) (eq a 2)) 1)");
    var f = r.read()
    cell.init()
    expect(f.eval(cell.environment)).toBe(cell.FALSE);

    var r = new cell.Reader("((lambda (a) (eq a 2)) 2)");
    var f = r.read()
    cell.init()
    expect(f.eval(cell.environment)).toBe(cell.TRUE);
  });
});
