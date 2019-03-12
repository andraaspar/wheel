import { range } from 'illa/ArrayUtil'
import React from 'react'

function App() {
	return (
		<>
			{range(50).map(_ => (
				<List key={_} />
			))}
		</>
	)
}

function List() {
	let id = Math.random() + ''
	return (
		<div
			className='wrapper'
			tabIndex={0}
			onWheel={e => onWheelHandler(true, id, e)}
		>
			<div className='inner' onWheel={e => onWheelHandler(false, id, e)}>
				{range(30).map(n => (
					<button key={n}>{`Button #${n}`}</button>
				))}
			</div>
		</div>
	)
}

let wheelTimeoutRefsById: { [k: string]: any } = {}

function onWheelHandler(isSelf: boolean, id: string, re: React.WheelEvent) {
	let self = isSelf
		? (re.currentTarget as HTMLDivElement)
		: (re.currentTarget.parentElement as HTMLDivElement)
	let e = re.nativeEvent
	if (isInside(self, document.activeElement)) {
		let scrollPastTop = e.deltaY < 0 && self.scrollTop <= 0
		let scrollPastBottom =
			e.deltaY > 0 &&
			self.scrollTop >= self.scrollHeight - self.clientHeight
		if (scrollPastTop || scrollPastBottom) {
			re.preventDefault()
		}
		re.stopPropagation()
	} else {
		if (!(id in wheelTimeoutRefsById)) {
			self.style.paddingRight = `${self.offsetWidth -
				self.clientWidth -
				2}px`
			self.style.overflow = 'hidden'
			re.preventDefault()
		}
		clearTimeout(wheelTimeoutRefsById[id])
		wheelTimeoutRefsById[id] = setTimeout(() => {
			delete wheelTimeoutRefsById[id]
			self.style.paddingRight = '0px'
			self.style.overflow = 'auto'
		}, 1000)
	}
}

function isInside(ancestor: Element, descendant: Element | null): boolean {
	if (!descendant) return false
	if (ancestor == descendant) return true
	return isInside(ancestor, descendant.parentElement)
}

export default App
