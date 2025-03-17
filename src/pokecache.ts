export type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(internal: number) {
    this.#interval = internal;
    this.#startReapLoop();
  }

  add<T>(key: string, val: T) {
    const cacheEntry = { createdAt: Date.now(), val } as CacheEntry<any>;
    this.#cache.set(key, cacheEntry);
  }

  get<T>(key: string): T | undefined {
    return this.#cache.get(key)?.val;
  }

  #reap() {
    const now = Date.now();
    for (const [key, cacheEntry] of this.#cache) {
      if (cacheEntry.createdAt < now - this.#interval) {
        this.#cache.delete(key);
      }
    }
  }
  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => {
      this.#reap();
    }, this.#interval);
  }
  stopReapLoop() {
    if (this.#reapIntervalId) {
      clearInterval(this.#reapIntervalId);
      this.#reapIntervalId = undefined;
    }
  }
}
