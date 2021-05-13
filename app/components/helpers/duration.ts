export class Duration {
  private constructor(private readonly ms: number) {}

  static milliseconds = (ms: number) => new Duration(ms)
  static seconds = (seconds: number) => new Duration(seconds * 1000)
  static minutes = (minutes: number) => new Duration(minutes * 60 * 1000)
  static hours = (hours: number) => new Duration(hours * 60 * 60 * 1000)
  static days = (days: number) => new Duration(days * 24 * 60 * 60 * 1000)
  static weeks = (weeks: number) =>
    new Duration(weeks * 7 * 24 * 60 * 60 * 1000)
  static months = (months: number) =>
    new Duration(months * 30 * 7 * 24 * 60 * 60 * 1000)
  static years = (years: number) =>
    new Duration(years * 12 * 30 * 7 * 24 * 60 * 60 * 1000)

  valueOf() {
    return this.ms
  }

  toString() {
    return `Duration(${this.ms}ms)`
  }

  get asMilliseconds() {
    return this.ms
  }
  get asSeconds() {
    return this.ms / 1000
  }
  get asMinutes() {
    return this.ms / 60 / 1000
  }
  get asHours() {
    return this.ms / 60 / 60 / 1000
  }
  get asDays() {
    return this.ms / 24 / 60 / 60 / 1000
  }
  get asWeeks() {
    return this.ms / 7 / 24 / 60 / 60 / 1000
  }
  get asMonths() {
    return this.ms / 30 / 7 / 24 / 60 / 60 / 1000
  }
  get asYears() {
    return this.ms / 12 / 30 / 7 / 24 / 60 / 60 / 1000
  }
}
