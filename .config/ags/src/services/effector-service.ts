import { type Store, type EventCallable, sample, createEffect } from "effector";
import { createEvent } from "effector/effector.umd";

interface Options<T> {
  store: Store<T>;
  setterEvent?: EventCallable<T>;
  access?: "r" | "w" | "rw";
}

export function createEffectorSerivice<T = any>({
  store,
  setterEvent,
  access = "r",
}: Options<T>) {
  if (!store.sid) throw new Error("Store has no sid");

  const value = store.getState();

  let storeType: string = typeof value;

  if (storeType === "number") storeType = "float";

  const storeName = "store";
  const signalName = `store-changed`;

  const service = class extends Service {
    static {
      Service.register(
        this,
        {
          [signalName]: [storeType],
        },
        {
          [storeName]: [storeType, access],
        },
      );
    }

    get store() {
      return store.getState();
    }

    set store(value: T) {
      if (!setterEvent) {
        throw new Error(`Store '${storeName}' has no setter event`);
      }
      if (!access.includes("r")) {
        throw new Error(`Store '${storeName}' is not writable`);
      }

      setterEvent(value);
    }

    constructor() {
      super();

      console.log("constructor", this);

      const onChange = createEffect((value: T) => {
        console.log("onChange effect", value, this.store);

        this.emit("changed");
        this.notify(storeName);
        this.emit(signalName, value);
      });

      sample({
        source: store,
        target: onChange,
      });
    }
  };

  return new service();
}
