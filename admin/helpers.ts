export default class Healpers{

	static sortedItems(items:[]):[]{
		return items.sort((a:any, b:any) => a.order - b.order);
	}
}