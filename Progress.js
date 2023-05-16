class Progress {
    constructor (element) {
        this.progressElement = element.querySelector('#progress'); 
        this.value = 0; 
        this.state = {
            normal: true,
            animated: false,
            hidden: false,
        }
    }

    setProgress(value) {
        let percentage = Number(value);
        if (!isNaN(percentage) && percentage <= 100 && this.state.normal) {
            this.progressElement.style.background = `radial-gradient(closest-side, white 83%, transparent 84% 100%), conic-gradient(var(--primary-color) ${percentage}%, var(--secondary-color) 0)`

            this.value = percentage;
            return this.value;
        } else {
            return 0;
        }
    }

    setAnimated(value) {
        this.state = {
            animated: value,
            normal: !value,
            hidden: false,
        }
        if (value) {
            this.progressElement.classList.add("progress-animated");
            this.setHidden(false);
        } else {
            this.progressElement.classList.remove("progress-animated");
        }
        this.value = 0;
        this.setProgress(this.value);
    }

    setHidden(value) {
        this.state = {
            animated: false,
            normal: !value,
            hidden: value,
        }
        if (value) {
            this.progressElement.classList.add('progress-hidden');
            this.setAnimated(false);
        } else {
            this.progressElement.classList.remove('progress-hidden');
        }
        this.value = 0;
        this.setProgress(this.value);
    }

}

export default Progress;