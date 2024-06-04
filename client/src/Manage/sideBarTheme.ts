export const customTheme = {
    "root": {
        "base": "min-h-screen",
        "collapsed": {
            "on": "w-16",
            "off": "w-64"
        },
        "inner": "h-full overflow-y-auto overflow-x-hidden bg-[#191d23] px-3 py-4 "
    },
    "collapse": {
        "button": "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-100 transition duration-75 hover:bg-gray-700 ",
        "icon": {
            "base": "h-6 w-6 text-gray-300 transition duration-75 group-hover:text-gray-100",
            "open": {
                "off": "",
                "on": "text-gray-100"
            }
        },
        "label": {
            "base": "ml-3 flex-1 whitespace-nowrap text-left",
            "icon": {
                "base": "h-6 w-6 transition delay-0 ease-in-out",
                "open": {
                    "on": "rotate-180",
                    "off": ""
                }
            }
        },
        "list": "space-y-2 py-2"
    },
    "cta": {
        "base": "mt-6 rounded-lg bg-gray-100 p-4",
        "color": {
            "blue": "bg-cyan-50",
            "dark": "bg-dark-50",
            "failure": "bg-red-50",
            "gray": "bg-alternative-50",
            "green": "bg-green-50 ",
            "light": "bg-light-50",
            "red": "bg-red-50 ",
            "purple": "bg-purple-50",
            "success": "bg-green-50",
            "yellow": "bg-yellow-50 ",
            "warning": "bg-yellow-50"
        }
    },
    "item": {
        "base": "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-100 hover:bg-gray-700",
        "active": "bg-gray-100 dark:bg-gray-700",
        "collapsed": {
            "insideCollapse": "group w-full pl-8 transition duration-75",
            "noIcon": "font-bold"
        },
        "content": {
            "base": "flex-1 whitespace-nowrap px-3"
        },
        "icon": {
            "base": "h-6 w-6 flex-shrink-0 text-gray-300 transition duration-75 group-hover:text-gray-900 ",
            "active": "text-gray-700 dark:text-gray-100"
        },
        "label": "",
        "listItem": ""
    },
    "items": {
        "base": ""
    },
    "itemGroup": {
        "base": "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
    },
    "logo": {
        "base": "mb-5 flex items-center pl-2.5",
        "collapsed": {
            "on": "hidden",
            "off": "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        },
        "img": "mr-3 h-6 sm:h-7"
    }
}