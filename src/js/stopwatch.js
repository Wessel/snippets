const { performance } = require('perf_hooks');

module.exports = class Stopwatch {
	/**
	 * Starts a new Stopwatch
   *
	 * @param {number} [digits=2] The number of digits to appear after the decimal point
	 */
	constructor(digits = 2) {
		this.digits = digits;
		this._start = performance.now();
		this._end = null;
	}

	/**
	 * The duration of this stopwatch since start or start to end if this stopwatch has stopped.
	 *
   * @type {number}
	 * @readonly
	 */
	get duration() {
		return this._end ? this._end - this._start : performance.now() - this._start;
	}

	/**
	 * If the stopwatch is running or not
	 *
   * @type {boolean}
	 * @readonly
	 */
	get running() {
		return Boolean(!this._end);
	}

	/**
	 * Restarts the Stopwatch (Returns a running state)
	 *
   * @returns {this} The stopwatch instance
	 * @chainable
	 */
	restart() {
		this._start = performance.now();
		this._end = null;
		return this;
	}

	/**
	 * Resets the Stopwatch to 0 duration (Returns a stopped state)
	 *
   * @returns {this} The stopwatch instance
	 * @chainable
	 */
	reset() {
		this._start = performance.now();
		this._end = this._start;
		return this;
	}

	/**
	 * Starts the Stopwatch
	 *
   * @returns {this} The stopwatch instance
	 * @chainable
	 */
	start() {
		if (!this.running) {
			this._start = performance.now() - this.duration;
			this._end = null;
		}
		return this;
	}

	/**
	 * Stops the Stopwatch, freezing the duration
	 *
   * @returns {this} The stopwatch instance
	 * @chainable
	 */
	stop() {
		if (this.running) this._end = performance.now();
		return this;
	}

	/**
	 * Defines toString behavior
	 *
   * @returns {string} The current time on the stopwatch in a human readable duration
	 */
	toString() {
		const time = this.duration;
		if (time >= 1000) return `${(time / 1000).toFixed(this.digits)}s`;
		if (time >= 1) return `${time.toFixed(this.digits)}ms`;
		return `${(time * 1000).toFixed(this.digits)}μs`;
	}
}
