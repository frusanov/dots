import { Variable } from "../../types/variable";

class BackdropService extends Service {
  static {
    Service.register(
      this,
      {
        backdrop_clicked: [],
        backdrop_changed: ["boolean"],
      },
      {
        backdrop_visible: ["boolean", "r"],
      },
    );
  }

  // #backdrop_visible = false;

  get backdrop_visible() {
    return Boolean(this.activeSubscriptions.size);
  }

  // set backdrop_visible(value: boolean) {
  //   if (this.#backdrop_visible === value) return;

  //   this.#backdrop_visible = value;
  //   this.emit("backdrop_changed", this.#backdrop_visible);
  //   this.notify("backdrop_visible");
  // }

  constructor() {
    super();
  }

  emitClicked() {
    this.emit("backdrop_clicked");
  }

  activeSubscriptions = new Set<Variable<boolean>>();

  subscribe(variable: Variable<boolean>, onClick?: () => void) {
    variable.connect("changed", () => {
      const value = variable.getValue();

      if (value) {
        this.activeSubscriptions.add(variable);
      } else {
        this.activeSubscriptions.delete(variable);
      }

      this.emit("backdrop_changed", this.backdrop_visible);
      this.notify("backdrop_visible");
    });

    this.connect("backdrop_clicked", () => {
      if (onClick) onClick();
    });
  }

  connect(event = "backdrop_changed", callback: (...args: any[]) => void) {
    return super.connect(event, callback);
  }
}

// the singleton instance
export const backdropService = new BackdropService();
