try {
    (() => {
        const drawLine = (y) => { // рисует линию
            return hmUI.createWidget(hmUI.widget.IMG, {
                x: 0,
                y: y,
                src: "line.png",
                show_level: hmUI.show_level.ONLY_NORMAL
            })
        }

        const createStatusImage = (x, y, image_on, image_off, name) => { // создаёт изображение-статус (подключение, не беспокоить и т п)
            hmUI.createWidget(hmUI.widget.IMG, {
                x: x,
                y: y,
                src: image_off,
                show_level: hmUI.show_level.ONLY_NORMAL
            })
            hmUI.createWidget(hmUI.widget.IMG_STATUS, {
                x: x,
                y: y,
                src: image_on,
                type: name,
                show_level: hmUI.show_level.ONLY_NORMAL
            })
        }

        const init_view = () => {
            const TIME_FONT = [] // инициализруем шрифты
            const DATE_FONT = []
            const WEEK_DAYS = []
            for (let i = 0; i < 10; i++) {
                TIME_FONT.push(`time/${i}.png`)
                DATE_FONT.push(`date/${i}.png`)
                if (i < 7)
                    WEEK_DAYS.push(`words/${i}.png`)
            }

            hmUI.createWidget(hmUI.widget.IMG, {  // фон
                x: 0,
                y: 0,
                w: 192,
                h: 490,
                src: "bg.png",
                show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
            })

            createStatusImage(55, 12,  // инициализируем иконки-статусы
                'icons/lock on.png', 'icons/lock off.png',
                hmUI.system_status.LOCK)
            createStatusImage(80, 10,
                'icons/bluetooth off.png', 'icons/bluetooth on.png',
                hmUI.system_status.DISCONNECT)
            createStatusImage(110, 10,
                'icons/moon on.png', 'icons/moon off.png',
                hmUI.system_status.DISTURB)

            hmUI.createWidget(hmUI.widget.TEXT_IMG, {  // батарея
                x: 0,
                y: 60,
                w: 192,
                font_array: DATE_FONT,
                // h_space: 1,
                unit_en: "date/%.png",
                icon: "icons/ligtning.png",
                align_h: hmUI.align.CENTER_H,
                type: hmUI.data_type.BATTERY,
                show_level: hmUI.show_level.ONLY_NORMAL
            })
            drawLine(90)
            hmUI.createWidget(hmUI.widget.IMG_DATE, { // дата
                day_zero: true,
                day_startX: 10,
                day_startY: 105,
                day_en_array: DATE_FONT,
                day_space: 1,

                month_zero: true,
                month_startX: 60,
                month_startY: 105,
                month_en_array: DATE_FONT,
                month_space: 1,

                year_zero: true,
                year_startX: 110,
                year_startY: 105,
                year_en_array: DATE_FONT,
                year_space: 1,

                show_level: hmUI.show_level.ONLY_NORMAL
            })
            hmUI.createWidget(hmUI.widget.IMG, {  // рисуем слэши для даты
                x: 45,
                y: 102,
                src: "date/slash.png",
                show_level: hmUI.show_level.ONLY_NORMAL
            })
            hmUI.createWidget(hmUI.widget.IMG, {
                x: 95,
                y: 102,
                src: "date/slash.png",
                show_level: hmUI.show_level.ONLY_NORMAL
            })
            drawLine(135)
            hmUI.createWidget(hmUI.widget.IMG_TIME, {  // рисуем время
                hour_zero: true,
                hour_startX: 10,
                hour_startY: 160,
                hour_space: 0,
                hour_array: TIME_FONT,
                hour_align: hmUI.align.CENTER,

                minute_zero: true,
                minute_startX: 110,
                minute_startY: 160,
                minute_space: 0,
                minute_array: TIME_FONT,
                minute_align: hmUI.align.LEFT,
                show_level: hmUI.show_level.ONLY_NORMAL
            })
            hmUI.createWidget(hmUI.widget.IMG, { // рисуем точки для времени
                x: 78,
                y: 165,
                src: "time/dots.png",
                show_level: hmUI.show_level.ONLY_NORMAL
            })
            hmUI.createWidget(hmUI.widget.IMG_TIME, { // тоже самое только для AOD
                hour_zero: true,
                hour_startX: 12,
                hour_startY: 162,
                hour_space: 0,
                hour_array: TIME_FONT,
                hour_align: hmUI.align.CENTER,

                minute_zero: true,
                minute_startX: 112,
                minute_startY: 162,
                minute_space: 0,
                minute_array: TIME_FONT,
                minute_align: hmUI.align.LEFT,
                show_level: hmUI.show_level.ONLY_AOD
            })
            hmUI.createWidget(hmUI.widget.IMG, {
                x: 80,
                y: 167,
                src: "time/dots.png",
                show_level: hmUI.show_level.ONLY_AOD
            })

            drawLine(225)
            hmUI.createWidget(hmUI.widget.IMG_WEEK, { // рисуем день неделин
                x: 0,
                y: 240,
                week_en: WEEK_DAYS,
                show_level: hmUI.show_level.ONLY_NORMAL
            })
            drawLine(270)
            hmUI.createWidget(hmUI.widget.TEXT_IMG, { // пульс
                x: 0,
                y: 285,
                w: 180,
                align_h: hmUI.align.RIGHT,
                type: hmUI.data_type.HEART,
                font_array: DATE_FONT,
                icon: 'icons/heart.png',
                show_level: hmUI.show_level.ONLY_NORMAL
            })

            drawLine(430)
            hmUI.createWidget(hmUI.widget.TEXT_IMG, { // шаги
                x: 0,
                y: 440,
                w: 190,
                align_h: hmUI.align.CENTER_H,
                font_array: DATE_FONT,
                type: hmUI.data_type.STEP,
                icon: 'icons/footsteps.png',
                show_level: hmUI.show_level.ONLY_NORMAL
            })

            hmUI.createWidget(hmUI.widget.IMG_ANIM, { // анимация пульса
                anim_path: 'anim',
                anim_prefix: 'animation',
                anim_ext: 'png',
                anim_fps: 30,
                anim_size: 20,
                repeat_count: 0,
                anim_status: hmUI.anim_status.START,
                x: 0,
                y: 310,
            })

            hmUI.createWidget(hmUI.widget.IMG_CLICK, { // открывать окно измерения пульса при нажатии
                x: 0,
                y: 285,
                w: 192,
                h: 125,
                type: hmUI.data_type.HEART
            })

            hmUI.createWidget(hmUI.widget.IMG_CLICK, { // открывать окно шагов при нажатии
                x: 0,
                y: 430,
                w: 192,
                h: 60,
                type: hmUI.data_type.STEP
            })

            hmUI.createWidget(hmUI.widget.IMG_CLICK, { // открывать окно будильника при нажатии
                x: 0,
                y: 145,
                w: 192,
                h: 70,
                type: hmUI.data_type.ALARM_CLOCK
            })

            hmUI.createWidget(hmUI.widget.IMG, { // уменьшать яркость при нажатии
                x: 0,
                y: 0,
                w: 96,
                h: 90,
                show_level: hmUI.show_level.ONLY_NORMAL
            }).addEventListener(hmUI.event.CLICK_DOWN, function (info) {
                let br = hmSetting.getBrightness()
                if (br > 20) hmSetting.setBrightness(br - 20)
                else hmSetting.setBrightness(0)
            })
            hmUI.createWidget(hmUI.widget.IMG, { // увеличивать яркость при нажатии
                x: 96,
                y: 0,
                w: 96,
                h: 90,
                show_level: hmUI.show_level.ONLY_NORMAL
            }).addEventListener(hmUI.event.CLICK_DOWN, function (info) {
                let br = hmSetting.getBrightness()
                if (br < 80) hmSetting.setBrightness(br + 20)
                else hmSetting.setBrightness(100)
            })

        }

        __$$hmAppManager$$__.currentApp.current.module = DeviceRuntimeCore.WatchFace({
            onInit() {
            },
            build() {
                init_view()
            },
            onDestory() {
            }
        })
    })()
} catch (e) {
    console.log(e)
}