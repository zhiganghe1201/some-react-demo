const key = 'demo13_1545210570249';

export async function getAllStudents() {
	return await fetch("http://api.duyiedu.com/api/student/findAll?appkey=" + key)
		.then(resp => resp.json())
		.then(resp => resp.data);
}