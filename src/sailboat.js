export default function Sailboat() {
    var _name;
    var _length;

    Object.defineProperty(this, 'name', {
        get: function() { return _name; },
        set: function(name) { _name = name; }
    });

    Object.defineProperty(this, 'length', {
        get: function() { return _length; },
        set: function(length) { _length = length; }
    });

    // Member functions
    this.hullspeed = function() {
        return 1.34 * Math.sqrt(this.length);
    };
}